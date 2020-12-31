
export function getLayerFromId(id, activeLayers) {
  for (var i = 0; i < activeLayers.length; i++) {
    if (activeLayers[i].uid === id) {
      return activeLayers[i];
    }
  }

  return null;
}

export function getCurrentStateJson(activeLayers, epochs, learningRate, trainBS, lossFunction, savePath, dataset) {
  return (
    JSON.stringify({
      layers: activeLayers.map((layer) => layer.toJson()),
      hyperparameters: {
        epochs: epochs,
        learning_rate: learningRate,
        momentum: 0.1,
        batch_size: trainBS,
        num_workers: 1,
        loss: lossFunction,
      },
      checkpoint_path: savePath,
      dataset_name: dataset,
    })
  )
}
