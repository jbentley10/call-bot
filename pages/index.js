// Import dependencies
let phone = require('../ssr-server');

const Index = () => (
  <div>
    <p>Hello Next.js, this is your friend Brian from logrocket</p>
    <a onClick={phone.callPhone}>Call a phone now</a>
  </div>
)
export default Index