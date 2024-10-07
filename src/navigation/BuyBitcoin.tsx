import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import useState  from 'react-native';

const P2PApps = () => {
    const [appName, setAppName] = useState('');
    const [appLink, setAppLink] = useState('');
    const [appList, setAppList] = useState([
        { name: 'Peach Bitcoin', link: 'https://learn.robosats.com/' },
        { name: 'Bisq', link: 'https://bisq.network/' },
        { name: 'Robosats', link: 'https://peachbitcoin.com/' },
    ]);

    const handleAddApp = () => {
        if (appName && appLink) {
            setAppList([...appList, { name: appName, link: appLink }]);
            setAppName('');
            setAppLink('');
        }
    };

    return (
        <div>
            <h1>Buy your Bitcoin with P2P apps</h1>
            <ul>
                {appList.map((app: { link: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                    <li key={index}>
                        <a href={app.link} target="_blank">{app.name}</a>
                    </li>
                ))}
            </ul>
            <h2>Add a P2P Application</h2>
            <label htmlFor="appName">Application Name:</label>
            <input
                type="text"
                id="appName"
                value={appName}
                onChange={(e) => setAppName(e.target.addEventListener)}
                required
            />
            <label htmlFor="appLink">Application Link:</label>
            <input
                type="url"
                id="appLink"
                value={appLink}
                onChange={(e) => setAppLink(e.target.addEventListener)}
                required
            />
            <button type="button" onClick={handleAddApp}>Add</button>
        </div>
    );
};

export default P2PApps;
