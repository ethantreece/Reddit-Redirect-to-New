function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: requestDetails.url.replace("www.reddit.com", "new.reddit.com"),
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ["*://www.reddit.com/*"], types: ["main_frame"] },
  ["blocking"]
);
