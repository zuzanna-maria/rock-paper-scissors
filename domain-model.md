domain model

- 2 pages - one per player
- players take turns interacting through their respective pages


- GET request to display name input forms to players
- entering name: POST request to server
- server checks if two POST requests made - one per player - if yes returns
game interface
- GET request to display both players' names and HPs + whose turn
- attacks - POST request - returns response with other player's HP decreased +
confirmation
- if HP = 0 - POST request - returns 'lose' message 
