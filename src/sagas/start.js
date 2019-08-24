import sagaMiddleware from './middleware';
import rootSaga from './root';

export default function start() {
  sagaMiddleware.run(rootSaga);
}
