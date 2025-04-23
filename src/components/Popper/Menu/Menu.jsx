import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Popper from '../Popper';
import MenuItem from './menuItem';
import HeaderMenu from './HeaderMenu';

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderResult = (attrs) => (
        <div className="w-56" tabIndex="-1" {...attrs}>
            <Popper className="pb-2">
                {history.length > 1 && <HeaderMenu title="Language" onBack={handleBack} />}
                <div className="overflow-y-auto">{renderItem()}</div>
            </Popper>
        </div>
    );

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
