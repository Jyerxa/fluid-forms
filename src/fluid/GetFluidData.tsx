import {TinyliciousClient} from '@fluidframework/tinylicious-client';
import {SharedMap} from 'fluid-framework';

const getFluidData = async () => {

    const client = new TinyliciousClient()
    const containerSchema = {
        initialObjects: {
            docDef: SharedMap,
            docData: SharedMap,
            focusData: SharedMap
            // todo: audience
        }
    }

    let container;
    let services;
    const containerId = window.location.hash.substring(1);

    if (!containerId) { // New session
        ({container, services} = await client.createContainer(containerSchema));
        const id = await container.attach();
        window.location.hash = id;
    } else { // Join session
        ({container, services} = await client.getContainer(containerId, containerSchema));
    }
    const initialObjects = await container.initialObjects;
    return {initialObjects, services}
}

export default getFluidData;
