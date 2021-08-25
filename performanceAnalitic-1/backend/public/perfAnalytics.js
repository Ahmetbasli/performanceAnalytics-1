const initialize = () => {
  window.addEventListener("load", handleWindowLoad);
};

const handleWindowLoad = () => {
  const performance =
    window.performance ||
    window.webkitPerformance ||
    window.mozPerformance ||
    window.msPerformance;
  if (!performance) return;

  const performanceMetrics = calculatePerformanceMetrics(performance);
  postPerformanceMetrics(performanceMetrics);
};

const calculatePerformanceMetrics = (performance) => {
  const ttfb =
    performance.timing.responseStart - performance.timing.requestStart;
  const fcp = performance.getEntriesByName("first-contentful-paint")[0]
    .startTime;

  const domLoad =
    performance.timing.domContentLoadedEventEnd -
    performance.timing.domContentLoadedEventStart;
  const windowLoad = Date.now() - performance.timing.navigationStart;
  const resourceLoadTimes = getResourceLoadTimes(performance);

  return { ttfb, fcp, domLoad, windowLoad, resourceLoadTimes };
};

const postPerformanceMetrics = (performanceMetrics) => {
  analyticData = {
    ...performanceMetrics,
    origin: window.location.origin,
    url: window.location.href,
  };
  console.log(analyticData);
  postData("http://localhost:3000/website", analyticData);
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(`An error accored ${response.status}`);

  return response.json();
};

const getResourceLoadTimes = (performance) => {
  return performance.getEntriesByType("resource").map((element) => {
    return {
      name: element.name,
      duration: element.duration,
      transferSize: element.transferSize,
      initiatorType: element.initiatorType,
    };
  });
};

initialize();
