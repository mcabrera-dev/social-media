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
import { redirect, useNavigate } from "react-router-dom";

function HomeView() {

  const navigate = useNavigate();
  const getUserListQry = useInjection<GetUserListQry>(
    TYPES.GET_ALL_USER_QRY
  );
  const stateManager = useInjection<StateManager>(TYPES.STATE_MANAGER);
  const [filter, setFilter] = useState("");
  const { data } = useQuery<User[]>({
    queryKey: ["userList"],
    queryFn: () => getUserListQry.execute(),
    staleTime: 1000 * 60 * 60 * 24, //caché for 1 day
  });

  const onChangeFilter = (e: any) => {
    setFilter(e.target.value);
  };

  const onNavigateUser = (selected: User) => {
    stateManager.patch({ selected });
    navigate('/user/' + selected.id)
  };

  return (
    <div className="home">
      <div className="filter-container">
        <InputField
          value={filter}
          results={data?.length || 0}
          name={"filter"}
          placeholder={"Filter users..."}
          type={"text"}
          onChange={onChangeFilter}
        ></InputField>
      </div>

      <div className="user-list-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map(n => (
              <tr key={n.id} onClick={() => onNavigateUser(n)}>
                <td>{n.name}</td>
                <td>{n.username}</td>
                <td>{n.email}</td>
                <td>{n.website}</td>
              </tr>
            ))
            }
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default HomeView;
