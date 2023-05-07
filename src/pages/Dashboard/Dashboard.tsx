import React, {useEffect, useState} from 'react';
import getFluidData from '../../fluid/GetFluidData';
import DocDefinition from './DocumentDefinition/DocDefinition';
import SharedForm from './Form/SharedForm';
import UserPanel from './UsersPanel/UserPanel';
import {useUserStore} from '../../store/useUserStore';



const Dashboard = () => {
    // todo: define fluidState interface and remove the any.
    const [fluidState, setFluidState] = React.useState<any>(null);
    const [fluidServices, setFluidServices] = React.useState<any>(null);

    // App Store
    const setUserNameAppState = useUserStore(state => state.setUserName);

    // local page state
    const [userList, setUserList] = useState<string[]>([]);
    const [fields, setfields] = useState<string[]>([])

    // Setup fluid connection and read state on load.
    useEffect(()=>{
        getFluidData().then((data) => {
            setFluidState(data.initialObjects);
            setFluidServices(data.services);
        });
    }, []);

    useEffect(()=>{
        if(fluidState){
            const {docDef} = fluidState;
            const updateLocalFields = () => {setfields(docDef.get('fields'))};
            updateLocalFields();

            docDef.on('valueChanged', updateLocalFields);


            return () => {
                docDef.off('valueChanged', updateLocalFields);
            }
        }
    }, [fluidState]);

    useEffect(()=>{
        const audience = fluidServices?.audience;
        if(audience){
            audience.on('membersChanged', () => {
                setUserNameAppState(audience.getMyself().userName);
                const mapArray: Array<{[key: string]: any}> = Array.from(audience.getMembers().entries(), ([key, value]) => ({[key]: value}));
                const userNames: string[] = mapArray.map(obj => {
                    const key = Object.keys(obj)[0];
                    return obj[key].userName;
                });
                setUserList(userNames);
            });
        }
    }, [fluidServices]);


    return (
        <div className="container mx-auto py-6 min-h-screen">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 h-80vh">
                <div className="bg-dark border border-neon-green p-4 rounded-md flex-auto w-32 min-h-max">
                    {/*todo: only pass in docDefinition state */}
                    <DocDefinition docDef={fluidState?.docDef} />
                </div>
                <div className="bg-dark border border-neon-green p-4 rounded-md flex-auto w-96">
                    <SharedForm docDef={fluidState?.docDef} docData={fluidState?.docData} focusData={fluidState?.focusData}/>
                </div>
                <div className="bg-dark border border-neon-green p-4 rounded-md flex-auto">
                    <UserPanel userList={userList}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
