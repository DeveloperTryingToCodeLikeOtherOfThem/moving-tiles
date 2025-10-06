namespace tiles {
    export class MoveTile extends Tile {
        constructor(vx: number, vy: number, tile: Image) {
           const tm = game.currentScene().tileMap
         
           for(let y = 0; y <= tm.areaHeight(); y++) {
               for (let x = 0; x <= tm.areaHeight(); x++) {
                   const loc = new Location(x, y, tm)
                   super(loc.x >> tm.scale, loc.y >> tm.scale, tm)
                   this.createMovingTile(vx, vy, tile)
                }
           }
        }

        protected createMovingTile(dx: number, dy: number, tile: Image) {
            const dt = control.eventContext().deltaTime
            
            control.eventContext().registerFrameHandler(10, () => {
                const dt2 = dt / 2
                setTileAt(getTileLocation(dx * dt2, dy * dt2), tile)
            })
        }
    }
}