import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter.tsx";
import './theme/global.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'rc-slider/assets/index.css';
import 'aos/dist/aos.css';
import {QueryClient, QueryClientProvider} from "react-query";


function App() {

  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter/>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
