AFRAME.registerComponent("custom-teleport", {
  init() {
    let characterController = this.el.sceneEl.systems["hubs-systems"].characterController;
    // first floor cordinates
    let hitPoint = new THREE.Vector3(2.706671541531063, 3.6381138610839843, -15.48373828454587);

    var el = this.el;
    el.addEventListener("click", function() {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      el.setAttribute("material", "color", randomColor);
      console.log("hitPoint : ", hitPoint);
      characterController.teleportTo(hitPoint);
    });
  }
});
