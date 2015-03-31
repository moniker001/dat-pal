# Dat-Palladio
Personal repository for working on RCC dat-palladio project

## Objective
To create a dat backend for Palladio.

## Example with Cushman Photos

This is a walkthrough example of importing a csv file into a dat datastore and then exposing it to Palladio. We will use the metadata for the [Cushman photos](https://github.com/iulibdcs/cushman_photos). A properly formatted version of the csv file can be found in our `cushman` [directory](https://github.com/moniker001/dat-pal/tree/master/cushman).

Metadata from the [Charles W. Cushman Photograph Collection](http://webapp1.dlib.indiana.edu/cushman/), licensed under [CC BY](http://creativecommons.org/licenses/by/4.0/deed.en_US), was created under the direction of the Indiana University Archives and published by the Indiana University Libraries.

The data may need to be reformatted for easier use and compatibility with features in Palladio. For this reason, we have included two versions of the data. `cushman.csv` contains the original data and `cushman2.csv` is the reformatted version. For this example, we will use `cushman2.csv`.

One could either use the bash script or manually run each step as outlined below. Either method will initiate the dat store, import the csv file, and start the dat server to expose the endpoint.

####To run bash script

Simply change to the cushman directory and run the script with the csv file name as an argument without the extension.

```
cd cushman
./datpal.sh cushman2
```

####To run manually

1) Alternatively to running the bash script, change to the cushman directory and initiate the dat store.

```
cd cushman
dat init
```

2) Import the csv file with the following command.

```
dat import --csv cushman2.csv
```

3) Start the dat server to expose the dat store.

```
dat listen
```

####After the dat server is running

The dat store can now be viewed at [http://localhost:6461](http://localhost:6461). The dat store can also be streamed as a csv with the endpoint [http://localhost:6461/api/csv](http://localhost:6461/api/csv).

On the [Palladio website](http://palladio.designhumanities.org/), select "Start" and then the "Load Spreadsheet or CSV" tab. Paste in the endpoint url ([http://localhost:6461/api/csv](http://localhost:6461/api/csv)) and select "Load".

![Palladio upload demo](https://github.com/moniker001/dat-pal/blob/master/resources/palladiodemo.png)

####Formatting data

Before using Palladio features, the data must be in the correct format. Some of the data categories in our example must be formatted first. Palladio does not always recognize the type of data for a data category right away, in which case the user must tell Palldio the type and format the data to match the corresponding type as Palladio recognizes it.

#####Date format

For example, one of the data categories in our imported Cushman data is a date. The data must have its type specified and be formatted correctly as described below:

1) Click on the **Review** button next to the **Date** category.

2) We need to edit this data by removing extra characters. In the **Remove the following strings** field, enter the following:

```
T00:00:00Z
```

3) In the **Data type** dropdown menu, select the option **Year or Date (YYYY-MM-DD)**. Then close the window.

You can then use the various features of Palladio with the data.


## Resources
* [Dat-Palladio](https://github.com/rcc-uchicago/dat-palladio)
* [Palladio](http://palladio.designhumanities.org) 
* [Dat](http://dat-data.com/)
