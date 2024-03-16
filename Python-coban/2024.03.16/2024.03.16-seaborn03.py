import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
################################################################

dulieu = pd.read_csv( "diemhocsinh.csv", index_col="MSHS")

print( dulieu.shape )
print( dulieu.columns )
print( dulieu.head() )


## plot
plt.figure( figsize= (8,4) )
sns.lineplot( data= dulieu[['Toán', 'Lý', 'Hóa']] )
plt.show()

