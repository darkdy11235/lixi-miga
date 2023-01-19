import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertWish1612928894799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /* let wishes: string[] = [
            "Da xinh dáng đẹp xuân sang có bồ",
            "Năm mới càng sung sức, không bực tức, gấp đôi lợi phức, tiền vào thơm phức",
            "Sang năm chơi hệ nhiều tiền",
            "Năm rồi cày sói trán Năm nay đầy sáng chói",
            "Việc nhiều mệt “rung rinh”\nNăm sau ví “rủng rỉnh”",
            "Cứ hết mình bằng sức\nQua năm mình bừng sắc",
            "Năm mới tài lộc, phát tướng phát tình",
            "Tết nay tui có hoa đào, còn bạn sẽ có anh nào rước thôi",
            "Năm mới, tết về sức khỏe tràn trề",
            "Năm mới thảnh thơi, đi chơi cũng có “Xiền”",
            "Năm mới quà nhiều, được cưng được iu",
            "Đón tết con Trâu, phong độ cực ngầu",
            "Tết đến xuân về, chúc bạn quẹo trái gặp A quẹo phải gặp A+",
            "Ờ mây zing, gút chóp em. Bóc lì xì 0đ như này thì nước ta sẽ sớm thành cường quốc thôi.",
            "Không bóc trúng lì xì lần đầu là lỗi của bạn, nhưng ngay lần đầu mà đã bóc trúng 0đ là do bạn có quá nhiều tiền lì xì rồi.",
            "Trong mắt mọi người lúc nào bạn cũng giỏi, nhưng giỏi nhất là bóc lì xì 0đ",
            "Chào bạn, mình đứng đây từ chiều 30 Tết chuẩn bị tiền lì xì nhưng bạn lại thờ ơ với mình quá. Thôi chúc bạn năm mới mạnh khỏe. Chào bạn mình đi.",
            "Quà tặng gieo “Duyên” ..  chứ xì lì thì 0đ.",
            "Học ăn, học nói, học gói mang về bao lì xì sức khỏe, niềm zui, chớ giá trị thì 0đ.",
            "Có làm thì mới có ăn, không làm mà đòi ăn thì chỉ có 16 hốt từ trái sang phải. Tặng bạn!",
            "Chúng ta của hiện tại, bạn dành cả mùa Tết để suy nghĩ làm sao để tránh 3 đôi thông nhưng vẫn thất bại. Sau này khi có bí kíp này rồi mà vẫn bị chặt heo thì có lẽ bạn sắp có người yêu rồi. Tặng bạn",
            "Người không chơi là người không thắng, người thua là người chưa thắng. Vấp ngã ở đâu gấp đôi ở đó. Tặng bạn!",
            "Còn thở còn gỡ. Tặng bạn !",
            "Đưa tay đây nào, nhận bao lì xì bạn nhớ",
            "Mở cẩn thận, bên trong là cả một bầu trời yêu thương đấy",
            "Đã lì xì thì phải đầy phong bì",
            "Thanh xuân như một tách trà, lì xì một phát iu iu cả đời",
            "Có tiền đi đường quyền",
            "Ông trời tạo ra địa chấn, lì xì của anh là điểm nhấn",
            "Deadline gì tầm này, nhận xì lì trước đã"
        ]; 
        
        let str = wishes.map(e => `("${e}")`).join(",");
        str = str.slice(0, str.length);
        */

        let wishes: string[] = [
            `("Da xinh dáng đẹp xuân sang có bồ", 0, null)`,
            `("Năm mới càng sung sức, không bực tức, gấp đôi lợi phức, tiền vào thơm phức", 0, null)`,
            `("Sang năm chơi hệ nhiều tiền", 0, null)`,
            `("Năm rồi cày sói trán Năm nay đầy sáng chói", 0, null)`,
            `("Việc nhiều mệt “rung rinh”\nNăm sau ví “rủng rỉnh”", 0, null)`,
            `("Cứ hết mình bằng sức\nQua năm mình bừng sắc", 0, null)`,
            `("Năm mới tài lộc, phát tướng phát tình", 0, null)`,
            `("Tết nay tui có hoa đào, còn bạn sẽ có anh nào rước thôi", 0, null)`,
            `("Năm mới, tết về sức khỏe tràn trề", 0, null)`,
            `("Năm mới thảnh thơi, đi chơi cũng có “Xiền”", 0, null)`,
            `("Năm mới quà nhiều, được cưng được iu", 0, null)`,
            `("Đón tết con Trâu, phong độ cực ngầu", 0, null)`,
            `("Tết đến xuân về, chúc bạn quẹo trái gặp A quẹo phải gặp A+", 0, null)`,
            `("Ờ mây zing, gút chóp em. Bóc lì xì 0đ như này thì nước ta sẽ sớm thành cường quốc thôi.", 0, null)`,
            `("Không bóc trúng lì xì lần đầu là lỗi của bạn, nhưng ngay lần đầu mà đã bóc trúng 0đ là do bạn có quá nhiều tiền lì xì rồi.", 0, null)`,
            `("Trong mắt mọi người lúc nào bạn cũng giỏi, nhưng giỏi nhất là bóc lì xì 0đ", 0, null)`,
            `("Chào bạn, mình đứng đây từ chiều 30 Tết chuẩn bị tiền lì xì nhưng bạn lại thờ ơ với mình quá. Thôi chúc bạn năm mới mạnh khỏe. Chào bạn mình đi.", 0, null)`,
            `("Quà tặng gieo “Duyên” ..  chứ xì lì thì 0đ.", 0, null)`,
            `("Học ăn, học nói, học gói mang về bao lì xì sức khỏe, niềm zui, chớ giá trị thì 0đ.", 0, null)`,
            `("Có làm thì mới có ăn, không làm mà đòi ăn thì chỉ có 16 hốt từ trái sang phải. Tặng bạn!", 0, "https://res.cloudinary.com/mtcloudinary/image/upload/v1613047384/lixitet/134927513_909745473114211_9162387695874847440_o-removebg-preview_dprbqa.png")`,
            `("Chúng ta của hiện tại, bạn dành cả mùa Tết để suy nghĩ làm sao để tránh 3 đôi thông nhưng vẫn thất bại. Sau này khi có bí kíp này rồi mà vẫn bị chặt heo thì có lẽ bạn sắp có người yêu rồi. Tặng bạn", 0, "https://res.cloudinary.com/mtcloudinary/image/upload/v1613047385/lixitet/z2325836972208_31855b428527d5dd5fc38700f8b704dd-removebg-preview_1_r4wuhu.png")`,
            `("Người không chơi là người không thắng, người thua là người chưa thắng. Vấp ngã ở đâu gấp đôi ở đó. Tặng bạn!", 0, "https://res.cloudinary.com/mtcloudinary/image/upload/v1613047383/lixitet/z2325836971132_8ddb4af4fb6398cb9037d2a587ae078f-removebg-preview_ubhe2l.png")`,
            `("Còn thở còn gỡ. Tặng bạn !", 0, "https://res.cloudinary.com/mtcloudinary/image/upload/v1613047390/lixitet/z2325836983277_60e9edb4a3f826cb3be3a38969087cb9-removebg-preview_talsxv.png")`,
            `("Đưa tay đây nào, nhận bao lì xì bạn nhớ", 1, null)`,
            `("Mở cẩn thận, bên trong là cả một bầu trời yêu thương đấy", 1, null)`,
            `("Đã lì xì thì phải đầy phong bì", 1, null)`,
            `("Thanh xuân như một tách trà, lì xì một phát iu iu cả đời", 1, null)`,
            `("Có tiền đi đường quyền", 1, null)`,
            `("Ông trời tạo ra địa chấn, lì xì của anh là điểm nhấn", 1, null)`,
            `("Deadline gì tầm này, nhận xì lì trước đã", 1, null)`
        ];

        let str = wishes.join(",");
        str = str.slice(0, str.length);
        await queryRunner.query(`insert into wish(content, forWinner, link_img) values ${str}`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
