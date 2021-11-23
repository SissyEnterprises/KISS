import axios from 'axios'

const StunServersUrl =
  'https://raw.githubusercontent.com/pradt2/always-online-stun/master/valid_hosts.txt'

function handleChannelStatusChange() {}

function receiveChannelCallback() {}

export default async ({ app }, inject) => {
  const res = await axios.get(StunServersUrl)
  const servers = []
  res.data.split('\n').forEach((val) => {
    servers.push({
      urls: `stun:${val}`,
    })
  })
  const community = {
    servers: servers.slice(0, 2),
    pc: null,
    dc: null,
    // eslint-disable-next-line require-await
    async connect() {
      this.pc = new RTCPeerConnection({
        iceServers: this.servers,
      })
      this.dc = this.pc.createDataChannel('community')
      this.dc.onopen = handleChannelStatusChange
      this.dc.onclose = handleChannelStatusChange
      this.dc.ondatachannel = receiveChannelCallback
    },
  }
  inject('community', community)
}
