// Модуль, в котором импортируются основные http-коды
const reasonDefault = "The reason is not filled in.";

// 2xx codes (Successful responses)
//     The request succeeded. The result and meaning of "success" depends on the HTTP method:
//         GET: The resource has been fetched and transmitted in the message body.
//         HEAD: Representation headers are included in the response without any message body.
//         PUT or POST: The resource describing the result of the action is transmitted in the message body.
//         TRACE: The message body contains the request as received by the server.
const return200 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 200,
        status: "OK",
        reason: reason,
        data: data
    }
}

// The request succeeded, and a new resource was created as a result.
// This is typically the response sent after POST requests, or some PUT requests.
const return201 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 201,
        status: "Created",
        reason: reason,
        data: data
    }
}

// The request has been received but not yet acted upon.
// It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
// It is intended for cases where another process or server handles the request, or for batch processing.
const return202 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 202,
        status: "Accepted",
        reason: reason,
        data: data
    }
}

// This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
// This is mostly used for mirrors or backups of another resource.
// Except for that specific case, the 200 OK response is preferred to this status.
const return203 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 203,
        status: "Non-Authoritative Information",
        reason: reason,
        data: data
    }
}

// There is no content to send for this request, but the headers are useful.
// The user agent may update its cached headers for this resource with the new ones.
const return204 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 204,
        status: "No Content",
        reason: reason,
        data: data
    }
}

// Tells the user agent to reset the document which sent this request.
const return205 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 205,
        status: "Reset Content",
        reason: reason,
        data: data
    }
}

// This response code is used in response to a range request when the client has requested a part or parts of a resource.
const return206 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 206,
        status: "Partial Content",
        reason: reason,
        data: data
    }
}




// 4xx codes (Client error responses)
// The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
const return400 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 400,
        status: "Bad Request",
        reason: reason,
        data: data
    }
}

// Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
// That is, the client must authenticate itself to get the requested response.
const return401 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 401,
        status: "Unauthorized",
        reason: reason,
        data: data
    }
}

// The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.
const return402 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 402,
        status: "Payment Required",
        reason: reason,
        data: data
    }
}

// The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
// Unlike 401 Unauthorized, the client's identity is known to the server.
const return403 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 403,
        status: "Forbidden",
        reason: reason,
        data: data
    }
}

// The server cannot find the requested resource.
// In the browser, this means the URL is not recognized.
// In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
// Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client.
// This response code is probably the most well known due to its frequent occurrence on the web.
const return404 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 404,
        status: "Not found",
        reason: reason,
        data: data
    }
}

// The request method is known by the server but is not supported by the target resource.
// For example, an API may not allow DELETE on a resource, or the TRACE method entirely.
const return405 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 405,
        status: "Method Not Allowed",
        reason: reason,
        data: data
    }
}

// This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
const return406 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 406,
        status: "Not Acceptable",
        reason: reason,
        data: data
    }
}

// This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
const return407 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 407,
        status: "Proxy Authentication Required",
        reason: reason,
        data: data
    }
}

// This response is sent on an idle connection by some servers, even without any previous request by the client.
// It means that the server would like to shut down this unused connection.
// This response is used much more since some browsers use HTTP pre-connection mechanisms to speed up browsing.
// Some servers may shut down a connection without sending this message.
const return408 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 408,
        status: "Request Timeout",
        reason: reason,
        data: data
    }
}

// This response is sent when a request conflicts with the current state of the server.
// In WebDAV remote web authoring, 409 responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
const return409 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 409,
        status: "Conflict",
        reason: reason,
        data: data
    }
}

// This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
// Clients are expected to remove their caches and links to the resource.
// The HTTP specification intends this status code to be used for "limited-time, promotional services".
// APIs should not feel compelled to indicate resources that have been deleted with this status code.
const return410 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 410,
        status: "Gone",
        reason: reason,
        data: data
    }
}

// Server rejected the request because the Content-Length header field is not defined and the server requires it.
const return411 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 411,
        status: "Length Required",
        reason: reason,
        data: data
    }
}

// In conditional requests, the client has indicated preconditions in its headers which the server does not meet.
const return412 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 412,
        status: "Precondition Failed",
        reason: reason,
        data: data
    }
}

// The request body is larger than limits defined by server.
// The server might close the connection or return an Retry-After header field.
const return413 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 413,
        status: "Content Too Large",
        reason: reason,
        data: data
    }
}

// The URI requested by the client is longer than the server is willing to interpret.
const return414 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 414,
        status: "URI Too Long",
        reason: reason,
        data: data
    }
}

// The media format of the requested data is not supported by the server, so the server is rejecting the request.
const return415 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 415,
        status: "Unsupported Media Type",
        reason: reason,
        data: data
    }
}

// The ranges specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target resource's data.
const return416 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 416,
        status: "Range Not Satisfiable",
        reason: reason,
        data: data
    }
}

// This response code means the expectation indicated by the Expect request header field cannot be met by the server.
const return417 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 417,
        status: "Expectation Failed",
        reason: reason,
        data: data
    }
}

// The server refuses the attempt to brew coffee with a teapot.
const return418 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 418,
        status: "I'm a teapot",
        reason: reason,
        data: data
    }
}

// The request was directed at a server that is not able to produce a response.
// This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
const return421 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 421,
        status: "Misdirected Request",
        reason: reason,
        data: data
    }
}

// The user has sent too many requests in a given amount of time (rate limiting).
const return429 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 429,
        status: "Too Many Requests",
        reason: reason,
        data: data
    }
}




// 5xx codes (Server error responses)
// The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
const return500 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 500,
        status: "Internal Server Error",
        reason: reason,
        data: data
    }
}

// The request method is not supported by the server and cannot be handled.
// The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
const return501 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 501,
        status: "Not Implemented",
        reason: reason,
        data: data
    }
}

// This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
const return502 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 502,
        status: "Bad Gateway",
        reason: reason,
        data: data
    }
}

// The server is not ready to handle the request.
// Common causes are a server that is down for maintenance or that is overloaded.
// Note that together with this response, a user-friendly page explaining the problem should be sent.
// This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service.
// The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
const return503 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 503,
        status: "Service Unavailable",
        reason: reason,
        data: data
    }
}

// This error response is given when the server is acting as a gateway and cannot get a response in time.
const return504 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 504,
        status: "Gateway Timeout",
        reason: reason,
        data: data
    }
}

// The HTTP version used in the request is not supported by the server.
const return505 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 505,
        status: "HTTP Version Not Supported",
        reason: reason,
        data: data
    }
}

// The server has an internal configuration error: during content negotiation, the chosen variant is configured to engage in content negotiation itself, which results in circular references when creating responses.
const return506 = (reason: string = reasonDefault, data: any = null): object => {
    return {
        code: 506,
        status: "Variant Also Negotiates",
        reason: reason,
        data: data
    }
}

export {
    return200, return201, return202, return203, return204, return205, return206,
    return400, return401, return402, return403, return404, return405, return406, return407, return408, return409, return410,
    return411, return412, return413, return414, return415, return416, return417, return418, return421, return429,
    return500, return501, return502, return503, return504, return505, return506
}