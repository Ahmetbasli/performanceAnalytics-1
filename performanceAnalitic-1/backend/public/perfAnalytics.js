const initialize = () => {
  window.addEventListener("load", () => {
    setTimeout(handleWindowLoad, 0);
  });
};

const handleWindowLoad = () => {
  //
  const performance = window.performance;
  if (!performance) return;

  // deprecated version(performance.timing) is used to support in all browsers
  // time = performance.getEntriesByType("navigation")[0] is another option
  const time = performance.timing;
  const ttfb = time.responseStart - time.redirectStart;
  const fcpTime = performance.getEntriesByName("first-contentful-paint")[0]
    .startTime;
  const domLoadTime = time.domContentLoadedEventEnd - time.navigationStart;
  const windowLoadTime = time.loadEventEnd - time.navigationStart;
  const resourceLoadTimes = getResourceLoadTimings(performance);

  postPerformanceMetrics({
    ttfb,
    fcpTime,
    domLoadTime,
    windowLoadTime,
    resourceLoadTimes,
  });
};

const postPerformanceMetrics = (performanceMetrics) => {
  analyticsData = {
    data: performanceMetrics,
    origin: window.location.origin,
    url: window.location.href,
  };
  postData("http://localhost:3000/website", analyticsData);
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(`An error accored ${response.status}`);

  return response.json();
};

const getResourceLoadTimings = (performance) => {
  return performance
    .getEntriesByType("resource")
    .filter((element) => {
      return element.initiatorType;
    })
    .map((element) => {
      return {
        name: element.name,
        initiatorType: element.initiatorType,
        transferSize: element.transferSize,
        duration: element.duration,
      };
    });
};

initialize();
