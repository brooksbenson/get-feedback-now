# Mongoose

## mongoose.connect

This method takes a URI pointing to a Mongo database and connects to it, allowing us to interact with out Mongo database through Mongoose.


## Model Class

A model class represents a Mongo collection. It is created via the mongoose.model method.

### Schema

We create a schema via the mongoose.Schema method, a constructor that takes an object as its first argument. The passed object defines the shape of documents for the Class that will use this schema.

#### Defining object

The defining object is used to decide about how records will be represented in our Mongo database. Its properties define the properties of our records. Each property needs to have a value type defined, and can be further detailed in order to give us greater control over how our records are created, manipulated, and stored.

### mongoose.model

The mongoose.model method is used to define mongoose classes and to load mongoose classes. To create one, provide a name as the first argument, and a Schema as the second. To load one, simply provide the previously created Model Class name to the method and bind it to the environment that needs it.


## Model Instance

A model instance represents a record, or a potential record, of a collection.

Passing data to a new model instance requires passing an object to a model class constructor we have defined.

Saving a new record to our database requires calling the save method on a newly created model instance.
