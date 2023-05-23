require("./settings");
const http = require("http");
const app = require("./index");
const PORTHOST = port || 8080;

http.createServer(app).listen(PORTHOST, () => {
    console.log(`
    █████╗ ██████╗ ██╗     █████╗ ██╗     ██████╗ ██╗███████╗
   ██╔══██╗██╔══██╗██║    ██╔══██╗██║     ██╔══██╗██║██╔════╝
   ███████║██████╔╝██║    ███████║██║     ██████╔╝██║███████╗
   ██╔══██║██╔═══╝ ██║    ██╔══██║██║     ██╔═══╝ ██║╚════██║
   ██║  ██║██║     ██║    ██║  ██║███████╗██║     ██║███████║
   ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝ V2 
			                          @alipje29
								 
Server running on http://192.168.0.109:` + PORTHOST)
    console.log(`Hello ${creator}`)
})
