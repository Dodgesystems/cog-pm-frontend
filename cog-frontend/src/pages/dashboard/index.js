import React, { useState, useEffect } from "react";
import styles from "../../../components/dashboardData/Tabs/TabStyles.module.scss";
import { TabsData } from "../../../components/dashboardData/Tabs/TabsData";
import TabTitle from "../../../components/dashboardData/Tabs/TabTitle";
import TabContents from "../../../components/dashboardData/Tabs/TabContents";
import { useRouter } from "next/router";
// import {useNav}
export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tab1");
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({ token });
    if (token) {
      setToken(true);
    } else {
      setToken(false);
      router.push("/loginPage");
    }
  }, [router]);
  const [token, setToken] = useState(false);
  if (!token) {
    return null; // Render nothing while redirecting
  }

  return (
    <main className={`${styles.dashboard} flex flex-col `}>
      <section className=" flex flex-col md:flex-row justify-between">
        <article className={`${styles.tabs} `}>
          <section
            className={`${styles.tabTitleContainer} flex flex-col  justify-between`}
          >
            {TabsData[0].TabTitle.map((tab) => (
              <section key={tab.id} className={`${styles.tabTitle} `}>
                <TabTitle
                  id={tab.id}
                  title={tab.title.map((item) => item.name)}
                  options={tab.title.map((item) =>
                    item.dropdown.map((ud) => ud.select)
                  )}
                  icon={tab.icon}
                  styles={styles}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </section>
            ))}
          </section>
        </article>
        <aside className={`${styles.tabContents} flex flex-col md:flex-row `}>
          {/* {TabsData[0].TabContents.map((tab) => (
            <section key={tab.id} className={`${styles.tabContents} `}>
              <TabContents
                id={tab.id}
                styles={styles}
                activeTab={activeTab}
                comps={tab.comp}
              />
            </section>
          ))} */}
        </aside>
      </section>
    </main>
  );
}
