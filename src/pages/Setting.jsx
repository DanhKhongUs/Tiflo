import SettingPage from '~/components/SettingPage/SettingPage';

function Setting() {
    return (
        <div className="px-18 py-6 md:grid-cols-3 gap-6 text-black bg-white min-h-screen">
            <SettingPage />
        </div>
    );
}

export default Setting;
