const info = {
  authoption: {
    walkIn: "Cho khách hàng",
    appointments: "Các cuộc hẹn"
  },
  locationsetup: {
    intro: {
      welcome: "Chào mừng bạn đến\n",
      message: "Chúng tôi sẽ đưa khách hàng gần nhất đến cửa nhà bạn\nRẤT NHANH CHÓNG",
      begin: "Hãy điền thông tin doanh nghiệp của bạn"
    },
    type: {
      question: "Bạn đang kinh doanh gì ?",
      buttonHeaders: {
        tapChoose: "Nhấn\nđể chọn"
      }
    },
    name: {
      "hair salon": "Nhập tên tiệm làm tóc:",
      "nail salon": "Nhập tên tiệm làm móng:",
      restaurant: "Nhập tên nhà hàng:",
      store: "Nhập tên cửa hàng:"
    },
    location: {
      if: {
        "hair salon": "nếu bạn đang ở tiệm làm tóc ngay bây giờ,",
        "nail salon": "nếu bạn đang ở tiệm làm móng ngay bây giờ,",
        restaurant: "nếu bạn đang ở nhà hàng ngay bây giờ,",
        store: "nếu bạn đang ở cửa hàng ngay bây giờ,"
      },
      addressHeader: "Entrez l'adresse de l'entreprise",
      address: {
        addressOne: "Nhập địa chỉ #1:",
        addressTwo: "Nhập địa chỉ #2 (Tùy chọn):",
        city: "Nhập vào thành phố:",
        province: "Nhập tỉnh:",
        postalCode: "Nhập mã bưu điện:"
      },
      sameOpen: {
        some: "Votre entreprise est-elle ouverte à la même heure le",
        all: "Votre entreprise est-elle ouverte à la même heure tous les jours"
      }
    },
    phonenumber: "Saisissez votre numéro de téléphone professionnel:",
    photo: {
      "hair salon": "Chụp ảnh tiệm làm tóc của bạn",
      "nail salon": "Chụp ảnh tiệm nail của bạn",
      restaurant: "Chụp ảnh nhà hàng của bạn",
      store: "Chụp ảnh cửa hàng của bạn"
    },
    openDays: {
      header: "Bạn mở cửa vào những ngày nào ?",
      time: "Đặt thời gian mở và đóng cửa cho {day}",
      sameTime: {
        all: "Réglez l'heure d'ouverture et de fermeture pour tous les jours",
        some: "Réglez l'heure d'ouverture et de fermeture pour"
      }
    }
  },
  register: {
    header: "cho khách hàng xem",
    name: "Điền tên của bạn:",
    photo: "Chụp ảnh khuôn mặt của bạn (Tùy chọn)",
    workingDays: {
      header: "Những ngày nào thì bạn làm việc ?",
      hour: "Đặt thời gian làm việc của bạn cho {day}",
      sameHours: {
        header: "Bạn có làm việc cùng giờ vào không",
        some: "Đặt thời gian làm việc của bạn cho",
        all: "Đặt thời gian làm việc hàng ngày của bạn"
      }
    },
    nameErrormsg: "Vui lòng cung cấp một cái tên bạn thích",
    workingDaysErrormsg: "Vui lòng chọn ngày bạn làm việc"
  },
  main: {
    navs: {
      myAppointments: "Cuộc hẹn\ncủa tôi",
      allAppointments: "Tất cả các\ncuộc hẹn",
      cartOrderers: "Đơn hàng",
      tableBills: "Bảng hóa đơn",
      tableOrders: "Đơn hàng bảng"
    },
    list: {
      header: "Bạn sẽ thấy các cuộc hẹn của mình ở đây",
      client: "khách hàng",
      staff: "Nhân Viên",
      change: "biến đổi"
    },
    chart: {
      stillBusy: "vẫn bận",
      booked: "đã đặt trước",
      walkIn: "Đi vào",
      editTime: "Nhấn vào thời gian để đăng ký lại",
      reschedule: {
        all: "Lên lịch lại tất cả",
        some: "Lên lịch lại một số",
        finishSelect: "Hoàn thành chọn",
      },
      rebook: "Tap any schedule to rebook"
    },
    cartOrderers: {
      header: "Bạn sẽ thấy tất cả các đơn đặt hàng tại đây",
      customerName: "khách hàng:",
      orderNumber: "Số đơn hàng:",
      seeOrders: "Xem đơn đặt hàng"
    },
    tableOrders: {
      header: "Không có (các) thứ tự bảng nào được nêu ra",
      tableHeader: "Bàn #",
      seeBill: "Xem hóa đơn",
      seeOrders: "Xem Đơn hàng",
      showCode: "Hiển thị mã"
    },
    bottomNavs: {
      info: "Thông\ntin",
      hours: "Xem giờ",
    },
    hidden: {
      scheduleOption: {
        rebookHeader: "Nhấn vào bất kỳ lúc nào khác để đăng ký lại",
        selectHeader: "Nhấn vào lịch bạn muốn đặt lại",
        remove: {
          header: "Tại sao lại hủy bỏ ? (Không bắt buộc)",
          reason: "Viết lý do"
        },
        select: {
          pushTypeHeader: "Lên lịch lại các cuộc hẹn về phía trước hoặc phía sau ?",
          pushByHeader: { forward: "Các cuộc hẹn đã lên lịch lại trước", backward: "Các cuộc hẹn đã lên lịch lùi lại trước" },
          timeFactorHeader: "Nhập bao nhiêu ",
          pushTypes: {
            backward: "Đẩy lùi",
            forward: "Đẩy về phía trước"
          },
          pushBys: {
            days: "Ngày",
            hours: "Giờ",
            minutes: "Phút"
          }
        },
        rescheduleNow: "Lên lịch lại ngay",
        selectFactor: "Chọn bao nhiêu {factor}"
      },
      showInfo: {
        businessHeader: "Giờ kinh doanh",
        staffHeader: "Tất cả nhân viên",
        staffName: "Tên nhân viên:"
      },
      showMoreoptions: {
        changeMenu: "Thay đổi menu",
        changeStaffinfo: "Thay đổi thông tin nhân viên",
        changeLogininfo: "Thay đổi thông tin đăng nhập",
        changeBusinessinformation: "Thay đổi tên / số điện thoại",
        changeBusinesslocation: "Thay đổi địa chỉ",
        changeBusinesslogo: "Thay đổi ảnh",
        changeBusinesshours: "Thay đổi Giờ làm việc",
        moreBusinesses: "Doanh nghiệp của bạn",
        walkIn: "Khách hàng bước vào",
        switchAccount: {
          header: "Chuyển tài khoản sang",
          owner: "Người sở hữu",
          kitchen: "Phòng bếp",
          tableOrderers: "Người đặt bàn"
        },
        changeLanguage: "Thay đổi ngôn ngữ",
        editTables: "Chỉnh sửa bảng",
        getAppointmentsby: {
          header: "Get appointments by",
          both: "Chủ sở hữu và nhân viên",
          owner: "Chỉ chủ sở hữu"
        },
        paymentRecords: "Xem thu nhập"
      },
      workingDays: {
        header: "Nhân viên mới làm việc vào những ngày nào?",
        hour: "Đặt thời gian làm việc của nhân viên mới",
        sameHours: "Đặt thời gian làm việc của nhân viên mới cho"
      },
      alert: {
        schedulingConflict: "Có xung đột về lịch trình",
        unfinishedOrders: "Có một số đơn hàng chưa hoàn thành",
        noOrders: "Không có đơn đặt hàng"
      },
      tables: {
        table: "Bàn #",
        showBarcode: "Chương trình mã vạch",
        hidden: {
          add: {
            tableNumber: "Nhập bảng #:",
          },
          remove: {
            header: "Xóa bảng #"
          },
          qr: {
            header: "Bàn #"
          }
        }
      }
    },
    editInfo: {
      staff: {
        header: "Chỉnh sửa nhân viên",
        add: "Thêm một nhân viên mới",
        change: {
          self: "Thay đổi thông tin của bạn",
          other: "Thay đổi giờ"
        }
      }
    },
    editingInfo: {
      header: {
        edit: "Chỉnh sửa thông tin của nhân viên",
        add: "Thêm thông tin của nhân viên"
      },
      changeCellnumber: "Thay đổi số ô",
      changeName: "Đổi tên bạn",
      changeProfile: "Thay đổi hồ sơ của bạn",
      changePassword: "Thay đổi mật khẩu của bạn",
      changeWorking: "Thay đổi ngày và giờ làm việc của bạn"
    },
    editingLanguage: {
      english: "Tiếng Anh",
      french: "người Pháp",
      vietnamese: "Tiếng Việt",
      chinese: "người Trung Quốc"
    },
    editingInformation: {
      name: "Nhập tên doanh nghiệp",
      phonenumber: "Nhập số điện thoại doanh nghiệp",
      cellnumber: "Entrez votre numéro de téléphone portable",
      verifyCode: "Entrez le code envoyé à votre message",
      currentPassword: "Entrer le mot de passe actuel",
      newPassword: "Entrer un nouveau mot de passe",
      confirmPassword: "Confirmez votre nouveau mot de passe"
    },
    editingLocation: "Nhập địa chỉ doanh nghiệp",
    editingLogo: "Ảnh của doanh nghiệp",
    editingHours: {
      header: "Chỉnh sửa giờ làm việc",
      openHeader: "Mở cửa vào {day}",
      changeToNotOpen: "Thay đổi thành không mở",
      changeToOpen: "Thay đổi để mở",
      notOpen: "Không mở cửa vào {day}"
    },
    editingWorkingHours: "Chỉnh sửa thời gian làm việc của bạn",
    deleteStaff: {
      header: "Làm việc {numDays} ngày",
      delete: "Xóa nhân viên"
    }
  },
  list: {
    add: "Thêm một doanh nghiệp"
  },
  orders: {
    header: "Đơn hàng",
    setWaittime: "đặt thời gian chờ",
    customerNote: "Ghi chú của khách hàng:",

    hidden: {
      noOrders: {
        header: "Đơn hàng đã được giao"
      },
      noWaittime: {
        header: "Vui lòng cho khách hàng biết thời gian chờ đợi"
      },
      waitTime: {
        header: "Chờ đợi bao lâu?",
        min: "phút"
      }
    }
  },
  booktime: {
    header: "Thay đổi cuộc hẹn",
    pickStaff: "Chọn một nhân viên (Tùy chọn)",
    pickAnotherStaff: "Chọn một nhân viên khác (Tùy chọn)",
    pickToday: "Chọn ngay hôm nay",
    tapDifferentDate: "Chọn một ngày khác",
    current: "hiện hành:",
    tapDifferentTime: "Chọn thời gian khác",

    hidden: {
      confirm: {
        client: "khách hàng",
        service: "Dịch vụ",
        change: "Thay đổi thời gian",
        appointmentChanged: "Cuộc hẹn đã thay đổi",
        leaveNote: "Để lại ghi chú nếu bạn muốn"
      }
    }
  },
  tables: {
    addTable: "Thêm bảng",
    table: "Bàn #",
    showBarcode: "Chương trình mã vạch",
    selectTable: "Chọn bảng",
    hidden: {
      add: {
        tableNumber: "Nhập bảng #:",
      },
      remove: {
        header: "Xóa bảng #"
      },
      qr: {
        header: "Bàn #"
      }
    }
  },

  // components
  menu: {
    header: {
      edit: "Chỉnh sửa menu",
      view: "Xem menu"
    },
    hidden: {
      uploadMenu: {
        takePhoto: "Chụp ảnh"
      },
      menuPhotooption: {
        header: "Bạn có chắc chắn muốn\nxóa menu này không ?"
      }
    }
  },
  addmenu: {
    header: {
      edit: "Chỉnh sửa menu",
      add: "Thêm menu"
    },
    name: "Thực đơn này gọi là gì ?",
    photo: "Chụp ảnh menu (Tùy chọn)"
  },
  addservice: {
    header: {
      edit: "Chỉnh sửa dịch vụ",
      add: "Thêm dịch vụ"
    },
    name: "Cuộc gọi dịch vụ này là gì ?",
    photo: "Chụp ảnh dịch vụ (Tùy chọn)",
    price: "Nhập giá dịch vụ:"
  },
  addproduct: {
    header: {
      edit: "Chỉnh sửa bữa ăn",
      add: "Thêm bữa ăn"
    },
    name: "Bữa ăn gọi là gì ?",
    photo: "Chụp ảnh bữa ăn này (Tùy chọn)",
    options: {
      addamount: "Thêm số lượng",
      addoption: "Thêm tùy chọn"
    },
    price: {
      size: "Nhập giá cho bữa ăn này",
      sizes: "Thêm kích thước",
    }
  },
  addmeal: {
    header: {
      edit: "Chỉnh sửa bữa ăn",
      add: "Thêm bữa ăn mới"
    },
    name: "Nhập tên của bữa ăn này:",
    photo: "Chụp ảnh bữa ăn này (Tùy chọn)",
    price: {
      size: "Nhập giá cho bữa ăn này",
      sizes: "Thêm kích thước",
      quantity: "Thêm số lượng",
      percent: "Cộng %"
    }
  },

  // global
  "Hair salon": "Tiệm\nlàm tóc",
  "Nail salon": "Tiệm\nlàm móng",
  Store: "Cửa hàng",
  Restaurant: "Quán ăn",

  "hair salon": "tiệm\nlàm tóc",
  "nail salon": "tiệm\nlàm móng",
  store: "cửa hàng",
  restaurant: "quán ăn",

  days: { Sunday: "Chủ nhật", Monday: "Thứ hai", Tuesday: "Thứ ba", Wednesday: "Thứ Tư", Thursday: "Thứ năm", Friday: "Thứ sáu", Saturday: "Thứ bảy" },
  months: { January: "Tháng Giêng", February: "Tháng hai", March: "Bước đều", April: "Tháng tư", May: "Có thể", June: "Tháng sáu", July: "Tháng bảy", August: "Tháng tám", September: "Tháng chín", October: "Tháng Mười", November: "Tháng mười một", December: "Tháng mười hai" },

  headers: {
    locatedHeader: {
      "hair salon": "Tiệm cắt tóc của bạn ở",
      "nail salon": "Tiệm làm móng của bạn ở",
      restaurant: "Nhà hàng của bạn ở",
      store: "Cửa hàng của bạn ở"
    },
    todayAt: "hôm nay lúc",
    tomorrowAt: "ngày mai lúc"
  },

  buttons: {
    back: "quay lại",
    next: "Đăng nhập",
    cancel: "sự hủy bỏ",
    skip: "nhảy",
    add: "cộng",
    edit: "chỉnh sửa",
    rebook: "Dặt lại",
    update: "cập nhật",
    begin: "Bắt đầu",
    takePhoto: "Chụp",
    retakePhoto: "Chụp lại ảnh",
    choosePhoto: "Chọn từ điện thoại",
    markLocation: "đánh dấu vị trí của bạn",
    enterAddress: "Nhập địa chỉ",
    editAddress: "Sửa địa chỉ",
    done: "Xong",
    changeDays: "thay đổi ngày",
    yes: "Vâng",
    no: "không",
    close: "gần",
    addmenu: "Thêm menu",
    addmeal: "Thêm bữa ăn",
    additem: "Thêm mặt hàng",
    addservice: "Thêm dịch vụ",
    delete: "Xóa bỏ",
    change: "Biến đổi",
    see: "Nhìn",
    random: "Chọn ngẫu nhiên",
    forward: "ở đằng trước",
    backward: "phía sau"
  },

  disableHeader: "Có một bản cập nhật cho ứng dụng\nXin vui lòng chờ trong giây lát\nhoặc chạm vào đóng"
}

export const vietnamese = info
