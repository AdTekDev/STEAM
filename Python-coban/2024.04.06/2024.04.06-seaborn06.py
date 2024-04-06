import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
################################################################
dulieu = pd.read_csv( "insurance.csv")

print( dulieu.shape )
print( dulieu.columns )
print( dulieu.head() )
## plot
##plt.figure( figsize= (8,4) )
plt.title("Bảo hiểm")
plt.xlabel("BMI")
plt.ylabel("Charges")
sns.scatterplot(data=dulieu, x="bmi", y="charges", hue="smoker" )
plt.show()

