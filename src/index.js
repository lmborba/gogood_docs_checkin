/**
 * GoGood Checkin API
 * This API allows clients to checkin through the GoGood API
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import CheckinFailedResponse400 from './model/CheckinFailedResponse400';
import CheckinFailedResponse401 from './model/CheckinFailedResponse401';
import CheckinFailedResponse500 from './model/CheckinFailedResponse500';
import CheckinRequest from './model/CheckinRequest';
import CheckinSuccessResponse from './model/CheckinSuccessResponse';
import DefaultApi from './api/DefaultApi';


/**
* This API allows clients to checkin through the GoGood API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GoGoodCheckinApi = require('index'); // See note below*.
* var xxxSvc = new GoGoodCheckinApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GoGoodCheckinApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GoGoodCheckinApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GoGoodCheckinApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CheckinFailedResponse400 model constructor.
     * @property {module:model/CheckinFailedResponse400}
     */
    CheckinFailedResponse400,

    /**
     * The CheckinFailedResponse401 model constructor.
     * @property {module:model/CheckinFailedResponse401}
     */
    CheckinFailedResponse401,

    /**
     * The CheckinFailedResponse500 model constructor.
     * @property {module:model/CheckinFailedResponse500}
     */
    CheckinFailedResponse500,

    /**
     * The CheckinRequest model constructor.
     * @property {module:model/CheckinRequest}
     */
    CheckinRequest,

    /**
     * The CheckinSuccessResponse model constructor.
     * @property {module:model/CheckinSuccessResponse}
     */
    CheckinSuccessResponse,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
