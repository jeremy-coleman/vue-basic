import { Engine, Scene, Vector3, MeshBuilder, HemisphericLight, ArcRotateCamera } from "@babylonjs/core"
const createScene = (canvas) => {
  const engine = new Engine(canvas)
  const scene = new Scene(engine)

  const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0))
  camera.attachControl(canvas, true)

  new HemisphericLight("light", new Vector3(0, 1, 0))

  MeshBuilder.CreateBox("box", {})

  engine.runRenderLoop(() => {
    scene.render()
  })
}

export { createScene }
