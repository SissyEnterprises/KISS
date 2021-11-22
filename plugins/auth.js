// import gapi from 'vue-gapi'
// import Vue from 'vue'
// import gapi from 'gapi'
import { gapi, loadClientAuth2 } from 'gapi-script'
export default async function ({ $auth }) {
  const client = await loadClientAuth2(
    gapi,
    '177245628514-lu7v4lfvkp01hmtnr12h2g4j4o56im8v.apps.googleusercontent.com',
    'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata'
  )
  $auth.$gapi = client
}
