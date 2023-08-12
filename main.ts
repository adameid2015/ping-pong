controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Mario.vy = -150
})
let Mario: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
Mario = sprites.create(img`
    ........................
    .......fff..............
    ....fffff2f.............
    ..ffeeeee22ff...........
    .ffeeeeee222ff..........
    .feeeefffeeeef..........
    .fffffeee2222ef.........
    fffe222fffffe2f.........
    fffffffffeeefff.....cc..
    fefe44ebbf44eef...ccdc..
    .fee4d4bbfddef..ccddcc..
    ..feee4dddddfeecdddc....
    ...f2222222eeddcdcc.....
    ...f444445e44ddccc......
    ...ffffffffeeee.........
    ...fff...ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Mario, 100, 0)
Mario.ay = 350
scene.cameraFollowSprite(Mario)
