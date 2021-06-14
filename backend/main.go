package main

import (
	"log"
	"net/http"

	"github.com/TutorialEdge/realtime-chat-go-react/pkg/websocket"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)

	if err != nil {
		log.Println(err)
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	fmt.Fprintf(w, "Simple Server")
	// })
	http.HandleFunc("/ws", serveWs)
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
