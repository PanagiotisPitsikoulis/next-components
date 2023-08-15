import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs-minimal";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="prose dark:prose-invert">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            blanditiis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe
            cupiditate harum rerum odio exercitationem minima deleniti et,
            tempora doloremque assumenda voluptate, commodi qui quisquam id
            corrupti laudantium, vero accusamus dolorem iure sapiente! Velit
            voluptatem corporis reprehenderit. Laborum libero excepturi quas
            iusto accusantium quibusdam vitae tenetur expedita repudiandae,
            impedit rerum facere? Voluptate ex esse quaerat aliquam iusto. Rerum
            consequuntur ipsam at labore, alias facere totam aliquid modi enim
            temporibus exercitationem laboriosam veritatis architecto vitae ex
            eum reiciendis minus libero rem necessitatibus quibusdam quisquam
            quaerat laborum repellendus? Possimus consequuntur quo vitae
            architecto asperiores officia laboriosam mollitia consectetur nihil
            saepe, iste est.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="prose dark:prose-invert">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            blanditiis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe
            cupiditate harum rerum odio exercitationem minima deleniti et,
            tempora doloremque assumenda voluptate, commodi qui quisquam id
            corrupti laudantium, vero accusamus dolorem iure sapiente! Velit
            voluptatem corporis reprehenderit. Laborum libero excepturi quas
            iusto accusantium quibusdam vitae tenetur expedita repudiandae,
            impedit rerum facere? Voluptate ex esse quaerat aliquam iusto. Rerum
            consequuntur ipsam at labore, alias facere totam aliquid modi enim
            temporibus exercitationem laboriosam veritatis architecto vitae ex
            eum reiciendis minus libero rem necessitatibus quibusdam quisquam
            quaerat laborum repellendus? Possimus consequuntur quo vitae
            architecto asperiores officia laboriosam mollitia consectetur nihil
            saepe, iste est.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
