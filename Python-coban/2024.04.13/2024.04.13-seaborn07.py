import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
################################################################
dulieu = pd.read_csv( "iris.csv")

print( dulieu.shape )
print( dulieu.columns )
print( dulieu.head() )
## plot
##plt.figure( figsize= (8,4) )
plt.title("Quan hệ Dài và Rộng của đài hoa")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Sepal Width (cm)")
#sns.scatterplot(data=dulieu, x="bmi", y="charges", hue="smoker" )
sns.lmplot(data=dulieu, x="Sepal Length (cm)", y="Sepal Width (cm)"
           , hue="Species")
plt.show()

