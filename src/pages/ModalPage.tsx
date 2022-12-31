import { useEffect, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={() => setShowModal((pv) => !pv)}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a enim consectetur,
        hendrerit velit in, pulvinar mauris. Morbi vehicula nibh nibh, vitae eleifend lectus lacinia
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a arcu vitae magna
        malesuada porttitor. Nam congue sagittis mauris, vel suscipit dolor sagittis tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Integer faucibus, ex quis vestibulum feugiat, neque nibh imperdiet ante, quis
        fermentum nibh nisl eget leo. In mi ante, pretium eget ullamcorper eu, ornare efficitur est.
        Duis posuere, odio ac eleifend sodales, erat arcu semper leo, ut facilisis arcu dui nec
        arcu. Mauris ac fringilla sem. Nullam vitae tincidunt augue. Suspendisse facilisis at arcu
        fermentum euismod. Nullam vel mollis odio. Curabitur nec tortor sit amet eros vestibulum
        porta.
      </p>
    </div>
  );
}

export default ModalPage;
