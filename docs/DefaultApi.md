# GoGoodCheckinApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkinHook**](DefaultApi.md#checkinHook) | **POST** //checkin/validate | Validates and checks in an user to a given business



## checkinHook

> CheckinSuccessResponse checkinHook()

Validates and checks in an user to a given business

A user token and a business token are received and the access is validated and, if everything is correct, the user is checked in into the partner.

### Example

```javascript
import GoGoodCheckinApi from 'go_good_checkin_api';

let apiInstance = new GoGoodCheckinApi.DefaultApi();
apiInstance.checkinHook((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CheckinSuccessResponse**](CheckinSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

