import {createApp, nextTick} from "vue";
import CloseRegularlyNotification from "@/components/notification/CloseRegularlyNotification.vue";

/**
 * @param options
 * {{title: string, content: string, delayMs: number, style: Object}}
 * @constructor
 */
export default function CloseRegularlyNotificationIns(options) {
    let componentOptions = {
        title: options.title ? options.title : 'Notification',
        content: options.content,
        delayMs: options.delayMs ? options.delayMs : 3000,
        style: options.style,
    };

    const app = createApp(CloseRegularlyNotification, componentOptions);
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);
    app.mount(mountNode);

    nextTick(() => {
        setTimeout(() => {
            app.unmount();
            document.body.removeChild(mountNode);
        }, options.delayMs ? options.delayMs : 3000);
    }).then();
}