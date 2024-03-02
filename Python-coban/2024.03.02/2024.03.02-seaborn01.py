import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
################################################################

fifa_data = pd.read_csv( "fifa.csv", index_col="Date", parse_dates=True )
print( fifa_data )
print( fifa_data.shape )
print( fifa_data.head() )
print( fifa_data.tail() )

## plot
plt.figure( figsize= (16,6) )
sns.lineplot( data= fifa_data )
plt.show()
