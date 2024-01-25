import { ArrowRight, ArrowLeft, Star, DotsThree } from "@phosphor-icons/react";

function Header() {
  return (
    <div className="w-widthMenu flex bg-bgButton items-center justify-between">
      <div className="flex text-textWhite gap-2">
        <button>
          <ArrowLeft style={{ fontSize: 25 }} />
        </button>
        <button>
          <ArrowRight style={{ fontSize: 25 }} />
        </button>
      </div>
      <div className="mr-4">
        <button className="">
          <Star
            style={{ fontSize: 25 }}
            className="ml-2 text-textWhite"
          />
        </button>
        <button>
          <DotsThree
            style={{ fontSize: 25 }}
            className="ml-2 text-textWhite"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
