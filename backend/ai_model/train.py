from model import build_model
import pandas as pd

# Load historical data
data = pd.read_csv('data/historical_energy_data.csv')

# Preprocess data and train model
model = build_model(input_shape=(None, data.shape[1]))
model.fit(X_train, y_train, epochs=10)

# Save the model
model.save('saved_models/energy_model.h5')
