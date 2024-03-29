import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
function App(){

    return <div>
        <div>
            <Button className='mb-5' success rounded outline>
                <GoBell />
                Click Me!
                </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload />
                Buy Now!
                </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                See deal!
                </Button>
        </div>
        <div>
            <Button secondary outline>Hide Ads!</Button>
        </div>
        <div>
            <Button primary rounded>Something!</Button>
        </div>        
    </div>
}

export default App;