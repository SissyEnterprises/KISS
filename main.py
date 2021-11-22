import sys
import os
from PySide2.QtCore import Qt
from PySide2.QtCore import QUrl
from PySide2.QtGui import QIcon
from PySide2.QtWidgets import (QApplication, QLineEdit,
                               QMainWindow, QPushButton, QToolBar, QAction)
from PySide2.QtWebEngineWidgets import QWebEnginePage, QWebEngineView
from concurrent.futures import ThreadPoolExecutor
from multiprocessing import Process
import http.server
import socketserver
import click


class Handler(http.server.SimpleHTTPRequestHandler):
  def __init__(self, *args, **kwargs):
    super().__init__(*args, directory="dist", **kwargs)


class MainWindow(QMainWindow):

  def __init__(self):
    super(MainWindow, self).__init__()

    self.setWindowTitle('SissyApp')

    self.toolbar = QToolBar()

    exitAction = QAction(QIcon(os.path.join(os.getcwd(), 'assets', 'icons', 'close.png')), 'Exit', self)
    exitAction.setShortcut('Ctrl+Q')
    exitAction.triggered.connect(self.close)

    self.toolbar = self.addToolBar('Exit')
    self.addToolBar(Qt.BottomToolBarArea, self.toolbar)
    self.toolbar.addAction(exitAction)

    self.webEngineView = QWebEngineView()
    self.setCentralWidget(self.webEngineView)
    self.webEngineView.page().titleChanged.connect(self.setWindowTitle)
    self.webEngineView.page().urlChanged.connect(self.urlChanged)

  def back(self):
    self.webEngineView.page().triggerAction(QWebEnginePage.Back)

  def forward(self):
    self.webEngineView.page().triggerAction(QWebEnginePage.Forward)

  def urlChanged(self, url):
    # Runs when the URL changes
    pass

  def setURL(self, url):
    # initialUrl = f'http://127.0.0.1:{port}'
    # self.webEngineView.load(QUrl(initialUrl))
    self.webEngineView.load(QUrl(url))


@click.command()
@click.option('--dev/--no-dev', default=False)
def run(dev):
  """Simple program that greets NAME for a total of COUNT times."""
  with ThreadPoolExecutor(max_workers=10) as executor:
    with socketserver.TCPServer(("", 0), Handler) as httpd:
      app = QApplication(sys.argv)
      mainWin = MainWindow()
      if dev:
        mainWin.setURL(f'http://127.0.0.1:{8000}')
      else:
        print(f'Server started at http://127.0.0.1:{httpd.server_address[1]}')
        executor.submit(httpd.serve_forever)
        mainWin.setURL(f'http://127.0.0.1:{httpd.server_address[1]}')
      availableGeometry = app.desktop().availableGeometry(mainWin)
      mainWin.resize(min(availableGeometry.width() * 2 / 3, 800), min(availableGeometry.height() * 2 / 3, 600))
      mainWin.showMaximized()
      # Run in production
      # Run last
      sys.exit(app.exec_())


if __name__ == '__main__':
  run()
