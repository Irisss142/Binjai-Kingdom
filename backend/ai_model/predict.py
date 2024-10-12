import tensorflow as tf
import pandas as pd

model = tf.keras.models.load_model('saved_models/energy_model.h5')

# Load new data and make predictions
new_data = pd.read_csv('data/new_sensor_data.csv')
predictions = model.predict(new_data)
