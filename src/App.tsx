
import React from "react";

import { Button, Label, Checkbox, Card } from "../index";


function App() {


  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="flex flex-col justify-center items-center ">
        <div className="pt-10">
          <Button label="Search" className="w-40 justify-center py-5" />
        </div>
        <div className="flex pt-10 gap-2">
          <Button label="Sign up" className="w-40 justify-center py-3" style="text" />
          <Button label="Login" className="w-40 justify-center py-3" />
        </div>
        <div className="flex pt-10 gap-2">
          <Label children="Label" required className="" />
        </div>
        <div className="flex pt-10 gap-2">
          <Checkbox defaultChecked label="Terms and conditions" name="return location" variant="primary" size="large" />
        </div>

        <div className="flex pt-10 gap-2">
          <Card >

        <div>
          image .....
        </div>
            <div>
              <div>Compact - Primary </div>
              <div>Compact - Short Description</div>
            </div>
          </Card>
        </div>

      </div>
    </ div>
  );
}

export default App;
