import angular from 'angular';

/**
* Exposes the basic "core" interface of NodeRemoteApi.
*/
export default ($http, API_URL) => {

  /**
  * Helper function for HTTP POST methods since there are a lot of those.
  * Basically defaults relevant params like `method` and prefixes the API URL.
  */
  const post = (path, options = {}) => {
    const opts = angular.extend({}, options, { method: 'POST', url: `${API_URL}/${path}` });
    return $http(opts);
  };

  const getVolume = () => {
    return $http.get(`${API_URL}/system/get-volume`).then(x => x.data);
  };

  const setVolume = level => {
    return post('system/set-volume', { data: { level } });
  };

  const moveMouse = ({ x, y }) => {
    return post('mouse/move-relative', { data: { x, y } });
  };

  const scrollUp = () => {
    return post('mouse/scroll-up');
  };

  const scrollDown = () => {
    return post('mouse/scroll-down');
  };

  const leftClick = () => {
    return post('mouse/left-click');
  };

  const rightClick = () => {
    return post('mouse/right-click');
  };

  const doubleClick = () => {
    return post('mouse/double-click')
  };

  const sendText = text => {
    return post('keyboard/send-text', { data: { text } });
  };

  const sendKeys = keys => {
    return post('keyboard/send-keys', { data: { keys } });
  };

  const sendAndEnterText = text => {
    return sendText(`${text}\n`)
  };

  const closeWindow = () => {
    return post('system/close-window')
  };

  const suspend = () => {
    return post('system/suspend');
  };

  return {
    getVolume,
    setVolume,
    moveMouse,
    scrollUp,
    scrollDown,
    leftClick,
    rightClick,
    doubleClick,
    sendText,
    sendKeys,
    sendAndEnterText,
    closeWindow,
    suspend
  };
};
