const obj = {
    who: "mason",
    cb() {
      console.log(this, "@obj cb");
      const a = this;
      return a;
    },
  };
  
  function foo(cb) {
    cb();
  }
  const cb = obj.cb();
  console.log(cb, "@外面");
  