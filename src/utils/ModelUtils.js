
export function getLayerFromId(id, activeLayers) {
  for (var i = 0; i < activeLayers.length; i++) {
    if (activeLayers[i].uid === id) {
      return activeLayers[i];
    }
  }

  return null;
}
