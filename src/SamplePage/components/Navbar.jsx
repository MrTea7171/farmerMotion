const Navbar = () => {
    return (
        <>
            <div id="nav">
                <div className="nav--logo">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUPDQ769PgAAAD99/v//f//+v7j3eELCAoVFBSkoaPo5OY+Oz60r7LSzND68/dGRUd6dXggHiD////Qys5nZWZ/fH3d1tjBvL4bGBrw6+/W0dX07fG6trdVUlSIhoeOiY01NDRiX2CblpgvLjCOjY3q6eknJidua2yuqap1cXSfmpxVVFRBQEEkJCPBvL8sKiq9RTjtAAAEwklEQVR4nO3c63qiOhgFYPg4RKmnCoKKtaDWY6v3f3cbBFIIcXQ6An3Y6/0x86gRswgkgkkVBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4F+wWNOVUNJ65NwtV3qfrDTFlE76vxQxhVENe4C9FkzZrSrxIun7pt9vKZUlWh96fdOazcz5+X0o2yAjZ02vb+xG/Cei+czKM11vI6kS67hpOf/l+iLt08ezVakwrRe+bmiapqrRP4Y2D8ttRT39JfgYzzuVtyKZmiiq0ptYa9ax0lfHacKekZbuimVpNDDUPM3YixHpzd9SzyZ3UnkjRgnVEk0/Ch8cJ0xe03nC5HEpIS310gZ1Tyw08YhMhza9ZhKq6nhT/OTHE9LQkG3vXSi1c2mtBmRvmkqoGp+Fj/6LhHPpBgfFE45NLc+0qftxqeM8lCc8/ywhnWRNGBUTGouCxf6Vdtsa+tIbCVV/m9+7jyfs8oSaEXWo/IErnokU9T51jIffCa89Y26nO/kqPZ7QzbZhmEvncOZ5Z9uGvt/whH4/4n7v9OJh9WhCpmTlokaL7dNiA600AtUkS6jZ1wqxPm/SxU8S0tovHAOMskbUnaYT9pOKv2Q1iiLnij2ccDjIEiXnGD9G9MPvSKiQ9rSEyRPZ4GGMZAlvfS1/olLCrIbZE4l/T6jLEtKq+mO3qYTXaxgib9nWhOzixEK7tQkpNAYxvb5rCxylFfU07U8YDluesP3jYR2QMIWEfHNI+L3FZEBsb0/D2Gh1PB67p7aOFozmAzvSb+21BTlWy4/S+J53xcn4RzWUcGe2vA3ZdOZ2Y9XfgWuqL6Wvrhd3Na3taf4H42F9kDCFhHxzSFi/hu+11fADYlMj/nqS+Ky8ZRv75m24MbW1dxPJ6V8P0l57E4ZufAqS19q7+mzrB3EbWq29xo/e729GS7NfecDmxkPaWJpfmu9WgeZG/JqGQ3ynySAh3xwS1g8JU5VdW7R2PGRB668tTpYZs6qf7dbYt7a2H6U1KiVUs4RPnpv4WxLS1935pcM0oXYvYTK/NJsV3fz80mSOMJ3TCqnGonjeZAmN5Kqc17w4W5oCPkf4+psL4/NVG58jrM68mM9nnhvF9Uw8kZb8LBZmC2OEUYC3tZbcpljxY6Lped6lufr6rphwwavqjk7hKmsqsea5ufr27hTu+RZn4tqRm6vknuz2eougWPNlbh1FhD+witd4+fUWelSOd82l9RbKcvW+riHirYTFjiYqd5GXM/ZCuVtrZoRFfBRqft/S36uPeCuhLt4iIk9adS0Qy7nyDX4V1z1d1El8Nqv1/QYsGO/FT6aLdEeIy/gUepOuXROb8DCPn6B9afXi08nXH457klWfB10sOtBtSbnNuLwjbLGlJ9dnaFXak08nW0NqmDvZLSJy/ELzDDRDsiPi2qviGtJSORqqn9FROv3YVZ9QXAds2qvwRi9OX/u763uv5QLP17VcOUfS0kfjvOoNaphVI6zlflX+NEox2u56tvunNdpXRMHozlruqDM9z+1RLcvVH1yPn5ZO1tl37g3Xj6zHr2nE/4kH/1bCb/mbCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Lz/AN+VcQbdcSA3AAAAAElFTkSuQmCC"
                        alt=""
                    />
                </div>
                <div className="nav--links">
                    <h4 className="nav--link">Home</h4>
                    <h4 className="nav--link">Work</h4>
                    <h4 className="nav--link">Studio</h4>
                    <h4 className="nav--link">Contact</h4>
                </div>
                <div className="nav--actions">
                    <div className="circle"></div>
                </div>
            </div>
        </>
    )
}

export default Navbar
