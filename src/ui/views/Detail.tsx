import "../../core/wdyr/wdyr";
import { TYPES } from "../../core/types/types";
import { GetUserListQry } from "../../application/queries/get-user-list-qry";
import { useInjection } from "../../core/ioc/ioc.react";
import { useState } from "react";
import { User } from "../../domain/user/user";
import { useQuery } from "react-query";
import InputField from "../components/filter/Filter";
import { StateManager } from "../../application/state-manager";
import React from "react";

function UserDetailView() {
    const getUserListQry = useInjection<GetUserListQry>(
        TYPES.GET_ALL_USER_QRY
    );
    const stateManager = useInjection<StateManager>(TYPES.STATE_MANAGER);
    //const [filter, setFilter] = useState("");

    const selected = stateManager.state.selected


    const onChangeTodoFilter = (e: any) => {
        //setFilter(e.target.value);
    };

    const onNavigateUser = (selected: User) => {
        stateManager.patch({ selected });
    };

    return (
        <div className="detail">
            <div className="userdata">
                {selected?.name}
                {selected?.username}
                {selected?.email}
                {selected?.address.city}
                {selected?.website}
                {selected?.company.name}
            </div>

            <div className="userDetails">
                <div className="albums">
                    albums
                </div>
                <div className="todos">
                    todos
                </div>
            </div>


        </div>
    );
}

export default UserDetailView;
