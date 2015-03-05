# Dat-Palladio
Personal repository for working on RCC dat-palladio project

## Objective
To create a dat backend for Palladio.

## Progress

* import into Dat (done!)
* expose via Dat REST API (in progress)
* import into Palladio (in progress)

As of now, a user is able to store data from a csv file into a dat datastore.

## Example with Cushman Photos

This is a walkthrough example of importing a csv file into a dat datastore and then exposing it to Palladio. We will use the metadata for the [Cushman photos](https://github.com/iulibdcs/cushman_photos). A properly formatted version of the csv file can be found in our [cushman directory](https://github.com/moniker001/dat-pal/tree/master/cushman).

Metadata from the [Charles W. Cushman Photograph Collection](http://webapp1.dlib.indiana.edu/cushman/), licensed under [CC BY](http://creativecommons.org/licenses/by/4.0/deed.en_US), was created under the direction of the Indiana University Archives and published by the Indiana University Libraries.

One could either use the bash script or manually run each step as outlined below. Either method will initiate the dat store, import the csv file, and start the dat server to expose the endpoint.

####To run bash script

Simply change to the cushman directory and run the script with the csv file name as an argument.

```
cd cushman
./datpal.sh cushman
```

####To run manually

1) Change to the cushman directory and initiate the dat store.

```
cd cushman
dat init
```

2) Import the csv file with the following command.

```
dat import --csv cushman.csv
```

3) Start the dat server to expose the dat store.

```
dat listen
```

####After the dat server is running

The dat store can now be viewed at [http://localhost:6461](http://localhost:6461). The dat store can also be streamed as a csv with the endpoint [http://localhost:6461/api/csv](http://localhost:6461/api/csv).

On the [Palladio website](http://palladio.designhumanities.org/), select "Start" and then the "Load Spreadsheet or CSV" tab. Paste in the endpoint url ([http://localhost:6461/api/csv](http://localhost:6461/api/csv)) and select "Load".

![Palladio upload demo](https://github.com/moniker001/dat-pal/blob/master/resources/palladiodemo.png)

You can then use the various features of Palladio with the data.


## Readme Information from RCC [Dat-Palladio](https://github.com/rcc-uchicago/dat-palladio) Repository

### Task Description

[Palladio](http://palladio.designhumanities.org) is a visualization framework for exploratory data analysis on tabular data.  It was developed primarily for researchers in the humanities and social-sciences working with collections of spatio-temporal data.

[Dat](http://dat-data.com/) is a flexible tool for storing, syncing, and
transforming tabular data.  It's like `git` for datasets.

We want to try using `dat` as a backend datastore that can be easily streamed
into Palladio.

In particular, you'll ...

* [import](https://github.com/maxogden/dat/blob/master/docs/importing.md) the supplied [data samples](https://github.com/rcc-uchicago/dat-palladio/tree/master/samples/csv) into a dat datastore
* [expose](https://github.com/maxogden/dat/blob/master/docs/rest-api.md) the resulting datastore through dat's REST API
* [import](http://palladio.designhumanities.org/#/upload) the streaming CSV from this REST endpoint into Palladio

Use the [`dat-palladio`](https://github.com/rcc-uchicago/dat-palladio) repo for sharing work on this project.


#### Motivation

We'd like to offer our users a way to expose their research collections to 
visualization/exploratory front-ends like Palladio.  In particular, we're interested in exposing project data we may be hosting for a research group in a shared multi-user database, such as MySQL.  

Data upload and sharing is currently a weak spot for Palladio.  One
option for importing data is to link to a public Google spreadsheet containing your tabular data.  OK, imagine the effort involved in having to manually dump a snapshot of your research dataset, upload to a Google spreadsheet, and make it publically accessible.

What if, instead, your hosted research data was already exposed as a REST
endpoint that could stream out your data as CSV via HTTP to a requesting
consumer, such as Palladio.  That is, instead of providing a link to the Google
Spreadsheet, you should be able to just provide the URL for your [streaming
endpoint](http://t.co/kFLTs4W0Lp) (e.g, `http://ws.rcc.uchicago.edu/sample/api/csv`).

For some additional context, see our [exchange](https://twitter.com/joyrexus/status/504376293408768000) with the lead developers of Palladio and Dat.

## Resources

* [Palladio](http://palladio.designhumanities.org)
  * [design/dev notes](http://esjewett.com/blog/palladio) - high-level
    overview of the design and architecture of Palladio by the lead dev
  * [sample dataset](http://palladio.designhumanities.org/sample/#/upload) -
    preloaded samples
  * [samples](https://github.com/rcc-uchicago/dat-palladio/tree/master/samples/csv) - CSV text files of sample dataset
  * [FAQ](http://hdlab.stanford.edu/lab-notebook/palladio/2014/08/18/palladio-faqs-0-6-0/)

* [Dat](http://dat-data.com/)
  * [What is dat?](https://github.com/maxogden/dat/blob/master/docs/what-is-dat.md)
  * [Getting Started](https://github.com/maxogden/dat/blob/master/docs/getting-started.md)
  * [Importing Data](https://github.com/maxogden/dat/blob/master/docs/importing.md)
  * [REST API](https://github.com/maxogden/dat/blob/master/docs/rest-api.md)
    * [CSV-streaming](http://t.co/kFLTs4W0Lp)
    * [Example](http://usgs-earthquakes.herokuapp.com/) - example of REST API
      serving up 
      [USGS earthquake data](https://github.com/maxogden/dat-usgs-earthquakes).
