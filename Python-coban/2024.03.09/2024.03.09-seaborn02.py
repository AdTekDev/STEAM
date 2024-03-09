import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
################################################################

dulieu = pd.read_csv( "spotify.csv", index_col="Date", parse_dates=True )
print( dulieu )
print( dulieu.shape )
print( dulieu.head() )
print( dulieu.tail() )

## plot
plt.figure( figsize= (8,4) )
sns.lineplot( data= dulieu )
plt.show()

