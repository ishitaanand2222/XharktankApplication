# Xharktank

#### Contains the GET/POST APIs required for the backend of Xharktank created with node.js and mongodb.

## Table of Contents


### Project Description

SharkTank is a panel of potential investors, termed as "Sharks", who listen to entrepreneurs pitch ideas for a business or product they wish to develop. These self-made multi-millionaires judge the business concepts and products pitched and then decide whether to invest their own money to help market and mentor each contestant.

Built a Backend of XharkTank where budding entrepreneurs can pitch ideas for a business or product they wish to develop by providing their name, title & idea for the business, the investment amount they expect to be fulfilled, and the percentage of equity they are ready to shed away to the potential investors. Investors must be able to retrieve the list of all pitches and share their feedback/comments with a counter offer as per their interests.


Implemented the GET/POST APIs required for the backend to function. Created with``` node.js and mongodb ```

### Installation and Running the Project

* Open your terminal/command prompt inside the folder where you wish to initialize your project.Copy the commands  paste them into your terminal and execute them one at a time
``` 
git clone https://github.com/ishitaanand2222/Xharktank.git
```

* Initiate your project by `npm init `

* As the second step you need to install all the given dependencies and tools
    * express by ` npm install express`
    * mongodb by `npm install mongodb `
    * mongoose by `npm install mongoose `
    * nodemon by ` npm install nodemon --save-dev `


### How to use this project
 
 ##### The interaction between the frontend and backend shall be based on a REST API with support for the below 4 endpoints.

 * Endpoint to post a pitch to the backend. You can use the sample request and expected response for scenario ``` Pitch created successfully ```
   
```` 
    curl --location --request POST 'http://<Server_URL>/pitches' \

    --header 'Content-Type: application/json' \

    --data-raw '{

    "entrepreneur": "Ashok kumar",

    "pitchTitle" : "Crio.Do - Work-experience based learning programs for developers",

    "pitchIdea" : "Build professional projects like the top 1% developers. Master the latest full stack and backend tech with real work-ex. Crack developer jobs at the best tech companies.",

    "askAmount": 10000000.25,

    "equity" : 12.5

    }'
````

````

{

"id": "1"

}
````

* Endpoint to make a counter offer for a pitch to the backend. Below is the sample request and expected response for scenario ``` Offer created successfully ```
````

curl --location --request POST 'http://<Server_URL>/pitches/1/makeOffer' \

--header 'Content-Type: application/json' \

--data-raw '{

"investor": "Anupam Mittal",

"amount" : 10000000.56,

"equity" : 20.2,

"comment": "A new concept in the ed-tech market. I can relate with the importance of the Learn By Doing philosophy. Keep up the Good Work! Definitely interested to work with you to scale the vision of the company!"

}'
````

````

{

"id": "1"

}
````
* Endpoint to fetch the ``` all the pitches in the reverse chronological order``` ( i.e. last created one first ) from the backend. Below is the sample request and expected response

````
curl --location --request GET 'http://<Server_URL>/pitches'

[

   {

      "id":"2",

      "entrepreneur":"Sanjay kumar",

      "pitchTitle":"Lenskart - Sabo Chashma Pehnao",

      "pitchIdea":"Lenskart's aim is to help drop this number marginally in the coming years, which can be achieved by providing high quality eyewear to millions of Indians at affordable prices, giving free eye check ups at home and by extending our services to the remote corners of India.",

      "askAmount":20000000.23,

      "equity":15.23,

      "offers":[

         

      ]

   },

   {

      "id":"1",

      "entrepreneur":"Ashok kumar",

      "pitchTitle":"Crio.Do - Work-experience based learning programs for developers",

      "pitchIdea":"Build professional projects like the top 1% developers. Master the latest full stack and backend tech with real work-ex. Crack developer jobs at the best tech companies.",

      "askAmount":10000000,

      "equity":12.5,

      "offers":[

         {

            "id":"1",

            "investor":"Anupam Mittal",

            "amount":10000000.23,

            "equity":20.23,

            "comment":"A new concept in the ed-tech market. I can relate with the importance of the Learn By Doing philosophy. Keep up the Good Work! Definitely interested to work along with you"

         }

      ]

   }

]
````

* Endpoint to specify a particular id (identifying the pitch) to ``` fetch a single Pitch```. Below is the sample request and expected response.

````
curl --location --request GET 'http://<Server_URL>/pitches/2'

{

   "id":"2",

   "entrepreneur":"Sanjay kumar",

   "pitchTitle":"Lenskart - Sabo Chashma Pehnao",

   "pitchIdea":"Lenskart's aim is to help drop this number marginally in the coming years, which can be achieved by providing high quality eyewear to millions of Indians at affordable prices, giving free eye check ups at home and by extending our services to the remote corners of India.",

   "askAmount":20000000.23,

   "equity":15.23,

   "offers":[]

}

````

### Testing

Jump to the source code directory and you will see ```main.py ``` and ``` requirements.txt``` under the assessment folder

* ``` requirements.txt ``` contains the list of python dependencies required for main.py script to run successfully. Open your terminal/command prompt, let’s install the required dependencies by executing the following command. Make sure you have Python 3 and pip3 installed on your local machine.

```` 
pip3 install -r assessment/requirements.txt
````
The above command must have successfully installed the dependencies on your local machine.

* ```main.py ``` script contains a bunch of basic tests which will perform HTTP Requests on your backend application.

  ![alt text](C:\Users\SEETA\Pictures\test.png)
  
  Open your terminal/command prompt, and let’s run the basic tests on your already-running backend application.

   ``` python3 -m pytest --pspec --disable-pytest-warnings assessment/main.py```

   Make sure that all your test cases pass. In case of failure, look at the stack trace, understand the difference between the expected and actual response and debug it.

  #### Hidden test cases:

  ![Image]()


### Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


### Authors

- [@ishitaanand2222](https://www.github.com/ishitaanand2222)

