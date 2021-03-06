import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../component/appbar";
import BoxCategoryLocket from "../../component/Box-category-loket";
import { Link } from "react-router-dom";
import Modal from "../../component/modal-pilih-loket";
import ContentLoader from "react-content-loader";
import { getListLoket, createAntrian } from "../../services/loket";

const MyLoader = () => (
  <ContentLoader
    height={746}
    width={400}
    speed={2}
    primaryColor="#e6e6e6"
    secondaryColor="#f4f4f4"
  >
    <rect x="123" y="23" rx="0" ry="0" width="0" height="0" />
    <rect x="30" y="41" rx="0" ry="0" width="86" height="86" />
    <rect x="149" y="42" rx="0" ry="0" width="189" height="29" />
    <rect x="149" y="94" rx="0" ry="0" width="189" height="29" />
    <rect x="29" y="173" rx="0" ry="0" width="86" height="86" />
    <rect x="149" y="179" rx="0" ry="0" width="189" height="29" />
    <rect x="149" y="231" rx="0" ry="0" width="189" height="29" />
    <rect x="30" y="321" rx="0" ry="0" width="86" height="86" />
    <rect x="148" y="325" rx="0" ry="0" width="189" height="29" />
    <rect x="149" y="377" rx="0" ry="0" width="189" height="29" />
  </ContentLoader>
);
function PilihLocket(props) {
  const [open, setOpen] = useState(false);
  const [loket, setLoket] = useState({});
  const [modal, setModal] = useState({});
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    console.log(modal);
    createAntrian(modal.id)
      .then(res => {
        console.log(res);
        props.history.push("/");
      })
      .catch(error => {
        console.log(error.response);
        setLoadingAdd(false);
        if (error.response.data.row == "users alerdy register !") {
          alert("User sudah terdaftar");
        } else {
          alert("Uups, terjadi kesalahan");
        }
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const getCategoryData = async () => {
      const category = await getListLoket(user.id);
      setLoket(category.row);
      console.log(category);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    getCategoryData();
  }, []);

  const { classes } = props;

  return (
    <Container maxWidth="xs" className={classes.Container}>
      <AppBar goBack title="Pilih Loket Antrian" />
      {isLoading == true ? (
        <div className={classes.loader}>
          <MyLoader />
        </div>
      ) : (
        <div>
          <Grid container spacing={4} className={classes.gridUpper}>
            <Link className={classes.link} onClick={handleOpen}>
              <Grid item>
                {loket.map(data => {
                  return (
                    <BoxCategoryLocket
                      title={data.counter.name}
                      current_queue={data.current_queue}
                      last_queue={data.last_queue}
                      click={() => {
                        setModal(data.counter);
                      }}
                    />
                  );
                })}
              </Grid>
            </Link>
          </Grid>
          <Modal
            name={modal.name}
            open={open}
            handleOpen={handleOpen}
            handleClick={handleClick}
            handleClose={handleClose}
            loadingAdd={loadingAdd}
          />
        </div>
      )}
    </Container>
  );
}

export default PilihLocket;
