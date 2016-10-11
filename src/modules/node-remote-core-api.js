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

  const getVolume = () => $http.get(`${API_URL}/system/get-volume`).then(x => x.data);

  const setVolume = level => post('system/set-volume', { data: { level } });

  const moveMouse = ({ x, y }) => post('mouse/move-relative', { data: { x, y } });

  const scrollUp = () => post('mouse/scroll-up');

  const scrollDown = () => post('mouse/scroll-down');

  const leftClick = () => post('mouse/left-click');

  const rightClick = () => post('mouse/right-click');

  const doubleClick = () => post('mouse/double-click');

  const sendText = text => post('keyboard/send-text', { data: { text } });

  const sendKeys = keys => post('keyboard/send-keys', { data: { keys } });

  const sendAndEnterText = text => sendText(`${text}\n`);

  const closeWindow = () => post('system/close-window');

  const suspend = () => post('system/suspend');

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
