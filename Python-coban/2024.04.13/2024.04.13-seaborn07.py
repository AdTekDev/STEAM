import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
################################################################
dulieu = pd.read_csv( "iris.csv")

print( dulieu.shape )
print( dulieu.columns )
print( dulieu.head() )
## plot
# sns.lmplot(data=dulieu, x="Sepal Length (cm)", y="Sepal Width (cm)", hue="Species")
# sns.histplot(data=dulieu["Sepal Width (cm)"])
# sns.kdeplot( data=dulieu["Petal Length (cm)"] , shade=True )

sns.jointplot(x=dulieu['Petal Length (cm)'], y=dulieu['Sepal Width (cm)'], kind="kde")


plt.show()

