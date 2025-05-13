import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = clsx(
        'text-[1.2rem] font-semibold rounded cursor-pointer border border-transparent select-none inline-flex items-center justify-center',
        {
            'pointer-events-none opacity-50': disabled,
            'text-white bg-gray-800 border-[#fe2c55] hover:bg-gray-700 transition': primary,
            'text-[#fe2c55] border-current hover:bg-[rgba(254,44,85,0.06)]': outline,
            'text-gray-800 hover:underline': text,
            'rounded-full shadow-sm border-[rgba(22,24,35,0.12)] hover:border-[rgba(22,24,35,0.2)] hover:bg-[rgba(22,24,35,0.03)]':
                rounded,
            'min-w-[88px] px-4 py-1': small,
            'min-w-[148px] px-4 py-[14px]': large,
        },
        className,
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className="ml-2 inline-block w-6 text-center">{leftIcon}</span>}
            <span className="mx-2">{children}</span>
            {rightIcon && <span className="inline-block w-6 text-center ml-2">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
